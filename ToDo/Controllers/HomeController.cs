using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using ToDo.Models;
using ToDo.Services;

namespace ToDo.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly IItemsService itemsService;
        private readonly UserManager<IdentityUser> userManager;

        public HomeController(ILogger<HomeController> logger, IItemsService itemsService, UserManager<IdentityUser> userManager)
        {
            this.itemsService = itemsService;
            _logger = logger;
            this.userManager = userManager;
        }

        /*public List<ToDoItem> GetItems()
        {
            List<ToDoItem> items = new List<ToDoItem>();
            items.Add(new ToDoItem { ItemId = 10, UserId = "19", Title = "aaa", Description = "bbbb" });
            items.Add(new ToDoItem { ItemId = 11, UserId = "20", Title = "ccc", Description = "dddd" });

            return items;
        }*/

        /*public ToDoItem GetItems()
        {
            return new ToDoItem { ItemId = 10, UserId = "19", Title = "aaa", Description = "bbbb" };
        }*/

        /*public JsonResult GetItemsJson()
        {
            return Json(new ToDoItem()
            {
                ItemId = 10,
                UserId = "19",
                Title = "aaa",
                Description = "bbbb"

            });
        }
*/
        public IEnumerable<ToDoItem> GetItems()
        {
            var items = itemsService.GetAll();
            return items;
        }

        /*public IEnumerable<ToDoItem> Add(DisplayToDoItem item)
        {
                var newItem = new ToDoItem()
                {
                    Description = item.Description,
                    Title = item.Title
                };
                    itemsService.Add(newItem);
                
            
            return itemsService.GetAll();

        }*/
        [HttpPost]
        public IEnumerable<ToDoItem> Add([FromBody]ToDoItem item)
        {

            itemsService.Add(item);
            return itemsService.GetAll();

        }

        [HttpDelete]
        public IEnumerable<ToDoItem> Delete(int id)
        {
            itemsService.Delete(id);
            return itemsService.GetAll();
        }

        public IEnumerable<ToDoItem> Edit(string Title)
        {

            if (ModelState.IsValid)
            {

                var newItem = new ToDoItem()
                {
                    Title = Title
                };
                itemsService.Update(newItem);
                //View(new DisplayToDoItem());
            }
            return itemsService.GetAll();
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Privacy()
        {
            return View();
        }

        public IActionResult Operations()
        {
            //return View(new Item { ItemId = 10, UserId = 19, Title = "aaa", Description = "bbbb" }) ;
            return View();
        }

       /* public IActionResult Add()
        {
            return View(new DisplayToDoItem()) ;
        }
*/
        /*public IActionResult Delete()
        {
            return View(1);
        }*/

       /* public IActionResult Edit()
        {
            return View();
        }
*/
        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
