﻿using System;
using System.Collections.Generic;
using System.Linq;
 using System.Numerics;
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
                    if (!IsAnyRunningServrer() || param.Length == 0)
                    {
                        return Json("Something went wrong, nothing to remove");
                    }
                    
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
                    
                    ProcessLastStopDate(dateNow);
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                return Json("ok");
            });
        }
        
        [HttpGet, Route("gettotalusetime")]
        public Task<JsonResult> GetTotalUseTime()
        {
            return Task.Run(() =>
            {
                var result = GetUsageTime(DateTime.Now);

                return Json(result);
            });
        }

        [HttpGet, Route("getcurrenttime")]
        public Task<JsonResult> GetCurrentTime()
        {
            return Task.Run(() => Json(data: DateTime.Now));
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

            if (String.IsNullOrEmpty(result.TotalUsageTime))
            {
                result.TotalUsageTime = (new TimeSpan()).ToString(@"dd\.hh\:mm\:ss");
            }
            
            var UsageTimeTemp = TimeSpan.Parse(result.TotalUsageTime);
            var timeSpanTemp = (TimeSpan) (result.LastStopDate - result.LastStartDate);
            result.TotalUsageTime = (UsageTimeTemp + timeSpanTemp).ToString(@"dd\.hh\:mm\:ss");
            
            _db.Update(result);
            _db.SaveChanges();
        }

        private UsageTimeStruct GetUsageTime(DateTime dateNow)
        {
            var item = _db.UsageTimes.FirstOrDefault();
            var result = new UsageTimeStruct();

            var timeSpanTemp = TimeSpan.Parse(item.TotalUsageTime);
            
            if (IsAnyRunningServrer())
            {
                timeSpanTemp = timeSpanTemp + ((TimeSpan) (dateNow - item.LastStartDate));
            }

            result.Seconds = timeSpanTemp.Seconds;
            result.Minutes = timeSpanTemp.Minutes;
            result.Hours = timeSpanTemp.Hours;
            result.Days = timeSpanTemp.Days;

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
