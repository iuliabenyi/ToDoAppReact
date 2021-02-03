using Microsoft.EntityFrameworkCore.Update;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ToDo.Models;

namespace ToDo.Services
{
    //public class ItemsMemoryService : IItemsService
    //{
    //    private readonly List<Item> items = new List<Item>();
    //    public ItemsMemoryService()
    //    {
    //        items.Add(new Item { ItemId = 10, UserId = "19", Title = "aaa", Description = "bbbb" });
    //        items.Add(new Item { ItemId = 11, UserId = "20", Title = "ccc", Description = "dddd" });
    //    }

    //    public Item Add(Item newItem)
    //    {
    //        items.Add(newItem);
    //        newItem.ItemId = items.Max(i => i.ItemId) + 1;
    //        return newItem;
    //    }

    //    public Item Delete(int id)
    //    {
    //        var item = items.FirstOrDefault(i => i.ItemId == id);
    //        if(item != null)
    //        {
    //            items.Remove(item);
    //        }
    //        return null;
    //    }

    //    public IEnumerable<Item> GetAll()
    //    {
    //        //return Task.Run(() => items.AsEnumerable());
    //        return from i in items
    //               select i;
    //    }

    //    public Item Update(Item updatedItem)
    //    {
    //        var item = items.SingleOrDefault(i => i.ItemId == updatedItem.ItemId);
    //        if(item != null)
    //        {
    //            item.Title = updatedItem.Title;
    //            item.Description = updatedItem.Description;
    //        }
    //        return item;
    //    }
    //}
}
