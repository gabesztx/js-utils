using Microsoft.VisualStudio.TestTools.UnitTesting;
using Nexius.Common.Helpers;
using Nexius.Common.Lti;
using Nexius.IdentityProvider.Core.Controllers;
using Nexius.IdentityProvider.Core.Test.Mock;
using Nexius.IdentityProvider.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Nexius.IdentityProvider.Core.Test.Controllers
{
	[TestClass]
	public class OauthControllerTests : BaseIntegrationTests
	{
		[TestMethod]
		public void Application_Valdiate_Success_Oauth_GET_Url_Test()
		{
			// initial values
			var baseUrl = "https://devhome.nexiuslearning.com/";
			var requestedUrl = baseUrl + "courses/5A301E43-ED43-428E-B282-9D7938ED882C";
			var appId = new Guid("959da4c2-21e6-4418-95a0-63fd7da2de1e");
			var appSecret = "app-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";
			var contextId = new Guid("08dfa0b2-c75f-4664-a80a-9e3b7977aae8");
			var contextSecret = "context-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";

			// signed oauth reequest
			var message = new SignatureService(new ShortGuid(appId).ToString(), appSecret).GenerateRequestUri("GET", requestedUrl, null);

			// mark origin in the requested url, only need server-to-server communication
			message = message + "&origin=" + HttpUtility.UrlEncode(requestedUrl);

			// mock data access
			var repository = new DummyUnitOfWorkRepository();

			// initial database
			repository.ApplicationContextRepository.Add(new DataAccess.Model.ApplicationContext { Id = contextId, ApplicationId = appId, Secret = contextSecret, Name = "1." });
			repository.ApplicationRepository.Add(new DataAccess.Model.Application { Id = appId, Secret = appSecret, Name = "1.", });

			var ltiService = new LtiService(repository);

			// validate
			var controller = new OauthController(ltiService);
			var validated = controller.ValidateRequest(new Uri(message).ParseQueryString(), HttpMethod.Get);
			Assert.AreEqual(HttpStatusCode.OK, validated.Key);
		}

		[TestMethod]
		public void Application_Valdiate_Fail_Oauth_GET_Url_Test()
		{
			// initial values
			var baseUrl = "https://devhome.nexiuslearning.com/";
			var requestedUrl = baseUrl + "courses/5A301E43-ED43-428E-B282-9D7938ED882C";
			var appId = new Guid("959da4c2-21e6-4418-95a0-63fd7da2de1e");
			var appSecret = "app-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";
			var contextId = new Guid("08dfa0b2-c75f-4664-a80a-9e3b7977aae8");
			var contextSecret = "context-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";

			// signed oauth reequest
			var message = new SignatureService(new ShortGuid(appId).ToString(), appSecret).GenerateRequestUri("GET", requestedUrl, null);

			// mark origin in the requested url, only need server-to-server communication
			message = message + "&origin=" + HttpUtility.UrlEncode(requestedUrl);

			// mock data access
			var repository = new DummyUnitOfWorkRepository();

			// initial database
			repository.ApplicationContextRepository.Add(new DataAccess.Model.ApplicationContext { Id = contextId, ApplicationId = appId, Secret = contextSecret, Name = "1." });
			repository.ApplicationRepository.Add(new DataAccess.Model.Application { Id = appId, Secret = "Failed", Name = "1.", });

			var ltiService = new LtiService(repository);

			// validate
			var controller = new OauthController(ltiService);
			var validated = controller.ValidateRequest(new Uri(message).ParseQueryString(), HttpMethod.Get);
			Assert.AreEqual(HttpStatusCode.Unauthorized, validated.Key);
		}


		[TestMethod]
		public void Context_Valdiate_Success_Oauth_GET_Url_Test()
		{
			// initial values
			var baseUrl = "https://devhome.nexiuslearning.com/";
			var requestedUrl = baseUrl + "courses/5A301E43-ED43-428E-B282-9D7938ED882C";
			var appId = new Guid("959da4c2-21e6-4418-95a0-63fd7da2de1e");
			var appSecret = "app-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";
			var contextId = new Guid("08dfa0b2-c75f-4664-a80a-9e3b7977aae8");
			var contextSecret = "context-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";

			// signed oauth reequest
			var message = new SignatureService(SignatureService.GenerateConsumerKey(appId, contextId), contextSecret).GenerateRequestUri("GET", requestedUrl, null);

			// mark origin in the requested url, only need server-to-server communication
			message = message + "&origin=" + HttpUtility.UrlEncode(requestedUrl);

			// mock data access
			var repository = new DummyUnitOfWorkRepository();

			// initial database
			repository.ApplicationContextRepository.Add(new DataAccess.Model.ApplicationContext { Id = contextId, ApplicationId = appId, Secret = contextSecret, Name = "1." });
			repository.ApplicationRepository.Add(new DataAccess.Model.Application { Id = appId, Secret = appSecret, Name = "1.", });

			var ltiService = new LtiService(repository);

			// validate
			var controller = new OauthController(ltiService);
			var validated = controller.ValidateRequest(new Uri(message).ParseQueryString(), HttpMethod.Get);
			Assert.AreEqual(HttpStatusCode.OK, validated.Key);
		}

		[TestMethod]
		public void Context_Valdiate_Fail_Oauth_GET_Url_Test()
		{
			// initial values
			var baseUrl = "https://devhome.nexiuslearning.com/";
			var requestedUrl = baseUrl + "courses/5A301E43-ED43-428E-B282-9D7938ED882C";
			var appId = new Guid("959da4c2-21e6-4418-95a0-63fd7da2de1e");
			var appSecret = "app-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";
			var contextId = new Guid("08dfa0b2-c75f-4664-a80a-9e3b7977aae8");
			var contextSecret = "context-eTV7D3waM4c337832KdR83F2337xx2UC97g27gw23s69A";

			// signed oauth reequest
			var message = new SignatureService(SignatureService.GenerateConsumerKey(appId, contextId), contextSecret).GenerateRequestUri("GET", requestedUrl, null);

			// mark origin in the requested url, only need server-to-server communication
			message = message + "&origin=" + HttpUtility.UrlEncode(requestedUrl);

			// mock data access
			var repository = new DummyUnitOfWorkRepository();

			// initial database
			repository.ApplicationContextRepository.Add(new DataAccess.Model.ApplicationContext { Id = contextId, ApplicationId = appId, Secret = "Failed", Name = "1." });
			repository.ApplicationRepository.Add(new DataAccess.Model.Application { Id = appId, Secret = appSecret, Name = "1.", });

			var ltiService = new LtiService(repository);

			// validate
			var controller = new OauthController(ltiService);
			var validated = controller.ValidateRequest(new Uri(message).ParseQueryString(), HttpMethod.Get);
			Assert.AreEqual(HttpStatusCode.Unauthorized, validated.Key);
		}
	}
}
