using AngelSignalsWeb.Data;
using AngelSignalsWeb.Model;
using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace AngelSignalsWeb.Controllers
{
    [Route("api/[Controller]")]
    public class UserController : Controller
    {
        private Context _context;
        private readonly IMapper _mapper;

        public UserController(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost("saveuser")]
        public IActionResult PostUser([FromBody] UserDTO user)
        {
            try
            {
                if (!ModelState.IsValid)
                {
                    var u = _mapper.Map<User>(user);
                    _context.User.Add(u);
                    _context.SaveChanges();

                    return new StatusCodeResult(StatusCodes.Status200OK);
                }
            }
            catch (System.Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }

            return null;
        }
    }
}
