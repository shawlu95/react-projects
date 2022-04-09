const paginate = (followers) => {
  const pageSize = 9;
  const pageCount = Math.ceil(followers.length / pageSize);
  console.log({ pageSize, pageCount });
  const pages = Array.from({ length: pageCount }, (_, index) => {
    const start = index * pageSize;
    return followers.slice(start, start + pageSize); // ok to pass end index
  });

  console.log({ pages });

  return pages;
}

export default paginate
