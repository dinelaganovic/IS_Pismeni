using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace AutobuskaStanica.Migrations
{
    /// <inheritdoc />
    public partial class v : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "karta",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    cena = table.Column<int>(type: "int", nullable: false),
                    tipkarte = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    br_sedista = table.Column<int>(type: "int", nullable: false),
                    polazak_id = table.Column<int>(type: "int", nullable: false),
                    putnik_id = table.Column<int>(type: "int", nullable: false),
                    povratnakarta_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_karta", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "polazak",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    grad_polazak = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    grad_odrediste = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prevoznik = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    kilometraza = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_polazak", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "povratnakarta",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    polazak_id = table.Column<int>(type: "int", nullable: false),
                    putnik_id = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_povratnakarta", x => x.id);
                });

            migrationBuilder.CreateTable(
                name: "putnik",
                columns: table => new
                {
                    id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    prezime = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    adresa = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    god_rodj = table.Column<int>(type: "int", nullable: false),
                    pol = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_putnik", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "karta");

            migrationBuilder.DropTable(
                name: "polazak");

            migrationBuilder.DropTable(
                name: "povratnakarta");

            migrationBuilder.DropTable(
                name: "putnik");
        }
    }
}
