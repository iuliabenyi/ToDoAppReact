using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Data.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using ToDo.Data;
using ToDo.Models;
using ToDo.Services;

namespace ToDo.Controllers
{
    public class ItemsController : Controller
    {
        private readonly IItemsService itemsService;
        private readonly ApplicationDbContext _context;
        private readonly UserManager<IdentityUser> userManager;

        public ItemsController(IItemsService itemsService, UserManager<IdentityUser> userManager)
        {
            this.itemsService = itemsService;
            this.userManager = userManager;
        }

        
        public IActionResult Operations()
        {
            var currUserId = userManager.GetUserId(User);
            var items = itemsService.GetAll();
            //var items = itemsService.GetItemsByUserId(currUserId);
            return View("Operations", items?.Select(itm =>new DisplayToDoItem() { 
                Description = itm.Description,
                Title = itm.Title
            }));

        }


        public IActionResult Add()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Add(DisplayToDoItem item)
        {
            var currUserId = userManager.GetUserId(User);

            if (ModelState.IsValid)
            {

                var newItem = new ToDoItem()
                {
                    UserId = currUserId,
                    Description = item.Description,
                    Title = item.Title
                };
                if (newItem.Description != null)
                {
                    itemsService.Add(newItem);
                }
            }
            
            return RedirectToAction("Add");
        }

        public IActionResult Delete()
        {
            return View(new DisplayToDoItem());
        }

        [HttpPost]
        public IActionResult Delete([FromForm]int itemid)
        {
            itemsService.Delete(itemid);
            return RedirectToAction("Delete");
        }

        public IActionResult Edit()
        {
            return View(new DisplayToDoItem());
        }

        [HttpPost]
        public IActionResult Edit(string Title, string Description)
        {

            if (ModelState.IsValid)
            {

                var newItem = new ToDoItem()
                {
                    Description = Description,
                    Title = Title
                };
                itemsService.Update(newItem);
                //View(new DisplayToDoItem());
            }

            return RedirectToAction("Edit");
        }



    }
}
