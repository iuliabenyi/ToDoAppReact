using Data.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ToDo.Models;

namespace ToDo.Services
{
    public interface IItemsService
    {
        IEnumerable<ToDoItem> GetAll();
        ToDoItem Add(ToDoItem newItem);
        void Delete(int id);
        ToDoItem Update(/*int id, */ToDoItem updatedItem);
        IEnumerable<ToDoItem> GetItemsByUserId(string id);
    }
}