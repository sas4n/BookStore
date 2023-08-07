﻿using System.ComponentModel.DataAnnotations;

namespace BookStore.Models
{
    public class User
    {
        [Key]
        public string Username { get; set; }

        public string Password { get; set; }
    }
}
