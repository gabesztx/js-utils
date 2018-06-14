using Nexius.IdentityProvider.DataAccess.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;

namespace Nexius.IdentityProvider.Core.Test.Mock
{
	public class DummyRepository<TKey, T> : IRepository<TKey, T>
		where T : class, IEntityKey<TKey>
	{
		public List<T> session;

		public DummyRepository(List<T> session)
		{
			this.session = session;
		}

		public bool Add(IEnumerable<T> items)
		{
			this.session.AddRange(items);
			return true;
		}

		public bool Add(T entity)
		{
			this.session.Add(entity);
			return true;
		}

		public bool AddOrUpdate(T entity)
		{
			throw new NotImplementedException();
		}

		public IQueryable<T> All()
		{
			return this.session.AsQueryable();
		}

		public bool Delete(IEnumerable<T> entities)
		{
			throw new NotImplementedException();
		}

		public void Delete(Expression<Func<T, bool>> expression)
		{
			throw new NotImplementedException();
		}

		public bool Delete(T entity)
		{
			var element = this.FindBy(entity.Id);
			this.session.Remove(element);
			return true;
		}

		public void Evict(T entity)
		{
			// do nothing
		}

		public IQueryable<T> FilterBy(Expression<Func<T, bool>> expression)
		{
			return this.session.AsQueryable().Where(expression);
		}

		public T FindBy(TKey id)
		{
			return this.session.FirstOrDefault(e => e.Id.ToString() == id.ToString());
		}

		public T FindBy(Expression<Func<T, bool>> expression)
		{
			return this.session.AsQueryable().FirstOrDefault(expression);
		}

		public T FirstOrDefault()
		{
			throw new NotImplementedException();
		}

		public T FirstOrDefault(Expression<Func<T, bool>> expression)
		{
			return this.session.AsQueryable().FirstOrDefault(expression);
		}

		public void Flush()
		{
			// do nothing
		}

		public T GetOriginal(T entity)
		{
			return entity;
		}

		public T Merge(T entity)
		{
			return entity;
		}

		public T Single(Expression<Func<T, bool>> expression)
		{
			return this.session.AsQueryable().FirstOrDefault(expression);
		}

		public T SingleOrDefault(Expression<Func<T, bool>> expression)
		{
			return this.session.AsQueryable().FirstOrDefault(expression);
		}

		public bool Update(T entity)
		{
			this.Delete(entity);
			this.Add(entity);
			return true;
		}
	}
}
