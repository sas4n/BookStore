﻿namespace BookStore.Models
{
    public class Book
    {

        public Guid Id { get; set; }

        public string Title { get; set; } = string.Empty;

        public string Author { get; set; }= string.Empty;

        public DateTime PublicationDate { get; set; }

    }
}
