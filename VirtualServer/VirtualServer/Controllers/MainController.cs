﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
 using Google.Protobuf.WellKnownTypes;
 using Microsoft.AspNetCore.Mvc;
using VirtualServer.Entities;
using VirtualServer.Models;

 namespace VirtualServer.Controllers
{ 
    [Route("api")]    
    public class MainController : Controller
    {
        private readonly AppDBContext _db;

        public MainController(AppDBContext db)
        {
            _db = db;
        }

        [HttpGet, Route("")]
        public Task<JsonResult> GetServers()
        {
            return Task.Run(() =>
            {
                var result = new List<Server>();
                try
                {
                    result = _db.Servers.ToList();
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                return Json(result);
            });
        }
        
        [HttpGet, Route("add")]
        public Task<JsonResult> AddServer()
        {
            return Task.Run(() =>
            {
                var result = new Server();
                var dateNow = DateTime.Now;
                result.CreateTime = dateNow;
                try
                {
                    ProcessLastStartDate(dateNow);
                    _db.Servers.Add(result);
                    _db.SaveChanges();
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                return Json(result);
            });
        }
        
        
        [HttpPost, Route("removeall")]
        public Task<JsonResult> RemoveAll([FromBody] int[] param)
        {
            return Task.Run(() =>
            {
                var result = new List<Server>();
                
                var dateNow = DateTime.Now;
                
                try
                {   
                    result = _db.Servers
                        .Where(p => param.Any(item => item == p.Id))
                        .ToList();

                    foreach (var item in result)
                    {
                        item.IsRemoved = true;
                        item.RemovedTime = dateNow;
                    }
                    
                    _db.Servers.UpdateRange(result);
                    _db.SaveChanges();
                    
                    // TODO: check if these removing servers are the last ones
                    // Now one can click remove button and reset last stop time even
                    // when there aren no running servers
                    ProcessLastStopDate(dateNow);
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                return Json(result);
            });
        }
        
        [HttpGet, Route("gettotalusetime")]
        public Task<JsonResult> GetTotalUseTime()
        {
            return Task.Run(() =>
            {
                var result = new TimeSpan();
                var dateNow = DateTime.Now;

                try
                {
                    result = GetUsageTime(dateNow);
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                return Json(result);
            });
        }

        private void ProcessLastStartDate(DateTime dateNow)
        {
            if (IsAnyRunningServrer()) { return; }

            var result = _db.UsageTimes.FirstOrDefault();
            result.LastStartDate = dateNow;
            _db.Update(result);
            _db.SaveChanges();
        }
        
        private void ProcessLastStopDate(DateTime dateNow)
        {
            if (IsAnyRunningServrer()) { return; }

            var result = _db.UsageTimes.FirstOrDefault();
            result.LastStopDate = dateNow;
            
            var nonNullableTimeSpanTemp = new TimeSpan(); 
            
            nonNullableTimeSpanTemp = nonNullableTimeSpanTemp
                .Add((TimeSpan) (result.LastStopDate - result.LastStartDate));

            if (result.TotalUsageTime == null)
            {
                result.TotalUsageTime = new DateTime(0001, 01, 01);
            }

            result.TotalUsageTime = result.TotalUsageTime + nonNullableTimeSpanTemp;
            
            _db.Update(result);
            _db.SaveChanges();
        }

        private TimeSpan GetUsageTime(DateTime dateNow)
        {
            var result = new TimeSpan();
            var item = _db.UsageTimes.FirstOrDefault();
            if (IsAnyRunningServrer())
            {
                // result = (TimeSpan) (item.TotalUsageTime + (
                //     item.LastStartDate - dateNow));
            }
            else
            {
                // result = (TimeSpan) item.TotalUsageTime;
            }

            return result;
        }

        private bool IsAnyRunningServrer()
        {
            var runningServers = _db.Servers
                .FirstOrDefault(p => !p.IsRemoved);
            return runningServers != null;
        }
    }
}
