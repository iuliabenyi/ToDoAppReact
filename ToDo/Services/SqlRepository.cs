using System.Collections.Generic;
using System.Threading;
using System.Threading.Tasks;
using ToDo.Data;
using System.Linq;
using ToDo.Models;
using Microsoft.EntityFrameworkCore;
using Data.Entities;
using Microsoft.EntityFrameworkCore.Query.SqlExpressions;

namespace ToDo.Services
{
    public class SqlItemsData : IItemsService
    {
        private readonly ApplicationDbContext db;
        public SqlItemsData(ApplicationDbContext db)
        {
            this.db = db;
        }

        public ToDoItem Add(ToDoItem newItem)
        {
            db.Add(newItem);
            db.SaveChanges();
            return newItem;
        }

        public void Delete(int id)
        {
            var item = GetById(id);
            if(item != null)
            {
                db.Items.Remove(item);
                db.SaveChanges();
            }
        }

        public IEnumerable<ToDoItem> GetAll()
        {
            return db.Items.ToList();
        }

        public ToDoItem Update(ToDoItem updatedItem)
        {
            db.Update(updatedItem);
            db.SaveChanges();
            return updatedItem;

            /*var entity = db.Items.Attach(updatedItem);
            entity.State = EntityState.Modified;
            return updatedItem;*/
        }

        public ToDoItem GetById(int id)
        {
            return db.Items.Find(id);
        }

        public IEnumerable<ToDoItem> GetItemsByUserId(string id)
        {
            var query = from i in db.Items
                        where i.UserId == id.ToString()
                        select i;
            return query;
        }


    }
}