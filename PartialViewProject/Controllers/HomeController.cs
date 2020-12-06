using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PartialViewProject.Controllers
{
    public class HomeController : Controller
    {
        // GET: Home
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult VistaParcial()
        {
            return PartialView();
        }
        public ActionResult VistaParcial2()
        {
            return PartialView();
        }
    }
}