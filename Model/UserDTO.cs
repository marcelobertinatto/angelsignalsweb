using System;
namespace AngelSignalsWeb.Model
{
    public class UserDTO
    {
        public string Nome { get; set; }
        public string Telefone { get; set; }
        public string Email { get; set; }
        public long ID { get; set; }
        public DateTime Data { get; set; }
        public int Source { get; set; }
    }
}
