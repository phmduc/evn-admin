import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const Blogs = lazy(() => import('../../container/blogs/blogs'));
const BlogDetails = lazy(() => import('../../container/blogs/blogDetail'));
const BlogCreate = lazy(() => import('../../container/blogs/blogCreate'));
const Categories= lazy(() => import('../../container/blogs/categories'));
const Category= lazy(() => import('../../container/blogs/category'));



const NotFound = lazy(() => import('../../container/pages/404'));

function BlogRoutes() {
  return (
    <Routes>
      <Route path="blogDetails/:id" element={<BlogDetails />} />
      <Route path="create" element={<BlogCreate />} />
      <Route path="view/*" element={<Blogs />} />
      <Route path="view/category/*" element={<Categories />} />
      <Route path="category/:id" element={<Category />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default BlogRoutes;
