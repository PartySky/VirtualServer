﻿using System;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VirtualServer.Entities;

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

        [HttpGet, Route("test")]
        public Task<JsonResult> Test()
        {
            return Task.Run(() =>
            {
                try
                {
                    var xTest = _db.Servers.ToList();
                }
                catch(Exception e)
                {
                    Console.WriteLine(e.Message);
                }

                return Json("Test");
            });
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
    }
}
