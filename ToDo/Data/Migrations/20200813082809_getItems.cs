using Microsoft.EntityFrameworkCore.Migrations;

namespace ToDo.Data.Migrations
{
    public partial class getItems : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql(
            @"CREATE OR ALTER VIEW dbo.GetItems
              AS
              SELECT dbo.Items.Title, dbo.Items.Description
            FROM dbo.Items
            ");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.Sql("DROP VIEW dbo.GetItems");
        }
    }
}
