using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Backend.Migrations
{
    public partial class Proradiiii : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IdOdeljenja",
                table: "Radnici");

            migrationBuilder.DropColumn(
                name: "IdRadnogMesta",
                table: "Radnici");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "IdOdeljenja",
                table: "Radnici",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "IdRadnogMesta",
                table: "Radnici",
                type: "int",
                nullable: true);
        }
    }
}
