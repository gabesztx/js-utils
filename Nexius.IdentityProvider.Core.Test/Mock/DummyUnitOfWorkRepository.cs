using Nexius.IdentityProvider.DataAccess.Infrastructure;
using System;
using System.Collections.Generic;
using Nexius.IdentityProvider.DataAccess.Model;
using Nexius.IdentityProvider.DataAccess.Model.Reference;
using Nexius.IdentityProvider.DataAccess.Model.Shallow;

namespace Nexius.IdentityProvider.Core.Test.Mock
{
	public class DummyUnitOfWorkRepository : IUnitOfWorkRepository
	{
		public List<Application> Applications = new List<Application>();
		public List<ApplicationContext> ApplicationContexts = new List<ApplicationContext>();

		public IRepository<Guid, ApplicationContext> ApplicationContextRepository
		{
			get
			{
				return new DummyRepository<Guid, ApplicationContext>(ApplicationContexts);
			}
		}

		public IRepository<Guid, Application> ApplicationRepository
		{
			get
			{
				return new DummyRepository<Guid, Application>(Applications);
			}
		}

		public IReadOnlyRepository<Guid, ApplicationShallow> ApplicationShallowRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, ApplicationUser> ApplicationUserRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, ContactAddress> ContactAddressRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, ContactPhone> ContactPhoneRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, DeletedUser> DeletedUserRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, Invitation> InvitationRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, Login> LoginRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<string, Message> MessageRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<int, OrganizationCategory> OrganizationCategoryRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, OrganizationContact> OrganizationContactRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, OrganizationProperty> OrganizationPropertyRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IReadOnlyRepository<Guid, OrganizationReference> OrganizationReferenceRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, Organization> OrganizationRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IReadOnlyRepository<Guid, OrganizationShallow> OrganizationShallowRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<int, OrganizationType> OrganizationTypeRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, UserContact> UserContactRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, UserOrganizationRole> UserOrganizationRoleRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IRepository<Guid, User> UserRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

		public IReadOnlyRepository<Guid, UserShallow> UserShallowRepository
		{
			get
			{
				throw new NotImplementedException();
			}
		}

        public IRepository<Guid, PreferenceEntity> PreferenceRepository
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public IRepository<Guid, AnonymousUserCounter> AnonymousUserCounterRepository
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public IRepository<Guid, PrivacyStatementLocalizedText> PrivacyStatementLocalizedTextRepository
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public IRepository<Guid, PrivacyStatement> PrivacyStatementRepository
        {
            get
            {
                throw new NotImplementedException();
            }
        }

        public void Commit()
		{
			// do nothing
		}

		public void Rollback()
		{
			// do nothing
		}

		public void Dispose()
		{
			// do nothing
		}

        public void ReopenTransaction()
        {
            // do nothing
        }

        public void Refresh<T>(T o)
        {
            throw new NotImplementedException();
        }

    }
}
