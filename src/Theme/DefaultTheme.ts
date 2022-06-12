import { Theme } from './Theme';

export const defaultTheme: Omit<Theme , "rightToLeft"> = {
    spinner: 'inline w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600',
    alert: {
        empty: 'p-4 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg dark:bg-blue-200 dark:text-blue-800 font-medium',
        error: 'p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800 font-medium',
        loading: 'p-4 text-sm text-gray-700 dark:text-gray-300'
    },
};
