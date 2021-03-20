using System;
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
        private const string hash = "7434fddacf9bd9ffff7389d36a899b0a";
        private const int appID = 2954623;
        private const string botURL = "http://localhost:5000/api/bot/botsendmessage";

        public UserController(Context context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpPost("registeruser")]
        public IActionResult PostUser([FromBody] UserDTO user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var u = _mapper.Map<User>(user);
                    u.Data = DateTime.Now;
                    u.Source = 2;
                    _context.User.Add(u);
                    _context.SaveChanges();

                    return new StatusCodeResult(StatusCodes.Status200OK);
                }
            }
            catch (System.Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }

            return new StatusCodeResult(StatusCodes.Status400BadRequest);
        }

        [HttpPost("telegrammessagetouser")]
        public async System.Threading.Tasks.Task<IActionResult> TelegramMessageToUserAsync([FromBody] UserDTO user)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    var u = _mapper.Map<User>(user);
                    u.Data = DateTime.Now;
                    u.Source = 2;
                    _context.User.Add(u);
                    _context.SaveChanges();

                    //var client = new TelegramClient(appID, hash);
                    //await client.ConnectAsync();

                    //TeleSharp.TL.Contacts.TLRequestImportContacts requestImportContacts = new TeleSharp.TL.Contacts.TLRequestImportContacts();
                    //requestImportContacts.Contacts = new TLVector<TLInputPhoneContact>();
                    //requestImportContacts.Contacts.Add(new TLInputPhoneContact()
                    //{
                    //    Phone = "+353833146370",
                    //    FirstName = u.Nome,
                    //    LastName = "test"
                    //});
                    //var o = await client.SendRequestAsync<TeleSharp.TL.Contacts.TLImportedContacts>((TLMethod)requestImportContacts);
                    //var NewUserId = (o.Users.First() as TLUser).Id.ToString();

                    //var json = JsonConvert.SerializeObject(NewUserId);
                    //var data = new StringContent(json, Encoding.UTF8, "application/json");

                    
                    //using (var clientHttp = new HttpClient())
                    //{
                    //    var response = await clientHttp.PostAsync(botURL, data);

                    //    string result = response.Content.ReadAsStringAsync().Result;
                    //    Console.WriteLine(result);
                    //}

                    return new StatusCodeResult(StatusCodes.Status200OK);
                }
            }
            catch (System.Exception ex)
            {
                return new StatusCodeResult(StatusCodes.Status500InternalServerError);
            }

            return new StatusCodeResult(StatusCodes.Status400BadRequest);
        }
    }
}
