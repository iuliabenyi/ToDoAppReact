using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Data.Entities
{
    public class ToDoItem
    {
        [Key]
        public int ItemId { get; set; }
        /*[ForeignKey("UserId")]
        [MaxLength(450)]*/
        public string UserId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
    }
}
