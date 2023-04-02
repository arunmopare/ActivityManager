using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if (context.Activities.Any()) return;

            var activities = new List<Activity>{
                new Activity{
                    Title = "Clean The Cycle",
                    Date = DateTime.UtcNow.AddMonths(-2),
                    Description = "Some description",
                    Category = "Todo",
                    City = "Pune",
                    Venue = "Home"
                },
                new Activity{
                    Title = "Birthday party",
                    Date = DateTime.UtcNow.AddMonths(-5),
                    Description = "Very good party",
                    Category = "Enjoy",
                    City = "Pune",
                    Venue = "pub"
                },
                new Activity{
                    Title = "Palakhi Sohala",
                    Date = DateTime.UtcNow.AddMonths(-6),
                    Description = "Jay Hari Vithhal",
                    Category = "Bhakti",
                    City = "Alandi",
                    Venue = "Vi"
                },
                new Activity{
                    Title = "Activity 3",
                    Date = DateTime.UtcNow.AddMonths(-4),
                    Description = "Description 3",
                    Category = "Cat3",
                    City = "city3",
                    Venue = "benue 3"
                }
            };

            await context.Activities.AddRangeAsync(activities);
            await context.SaveChangesAsync();
        }
    }
}