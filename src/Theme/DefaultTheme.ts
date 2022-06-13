import { Theme } from './Theme';

export const defaultTheme: Omit<Theme , "rightToLeft"> = {
    spinner: 'inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600',
    alert: {
        empty: 'p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 font-medium',
        error: 'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 font-medium',
        loading: 'p-4 text-sm text-gray-700 dark:text-gray-300'
    },
    detailsGroup: {
        wrapper: 'bg-white shadow overflow-hidden sm:rounded-lg',
        wrapperCard: 'bg-white shadow overflow-hidden sm:rounded-lg',
        title: 'text-lg leading-6 font-medium text-gray-900 dark:text-gray-100',
        subtitle:'mt-1 max-w-2xl text-sm text-gray-500',
        item: {
            title: 'text-sm font-medium text-gray-500',
            value: 'mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2 dark:text-gray-100',
            action: 'font-medium text-primary-600 hover:text-primary-500',
        }
    }
};
