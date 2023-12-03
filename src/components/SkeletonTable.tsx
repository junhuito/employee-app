export const SkeletonTable = ({ row = 3, loading = true }) => {
  return (
    loading &&
    Array.from({ length: row }).map((_, index) => (
      <tr
        key={index}
        className='border-b-2 bg-white text-xs hover:bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-600'
      >
        <td scope='row' className='whitespace-nowrap px-6 py-4 font-bold'>
          <div className='h-2.5 w-48 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </td>
        <td className='px-6 py-4'>
          <div className='h-2.5 w-48 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </td>
        <td className={`px-6 py-4`}>
          <div className='h-2.5 w-48 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </td>
        <td className='px-6 py-4'>
          <div className='h-2.5 w-48 animate-pulse rounded-full bg-gray-200 dark:bg-gray-700'></div>
        </td>
      </tr>
    ))
  );
};
