using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ToDo.Models
{
    public class DisplayToDoItem
    {
        public int ItemId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
