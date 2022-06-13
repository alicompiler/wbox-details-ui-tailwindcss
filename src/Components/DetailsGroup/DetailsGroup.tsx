import {GroupComponentProps} from "wbox-details-ui";
import {useTheme} from "../../Theme/UseTheme";


export function DetailsGroup(props: GroupComponentProps) {
    const theme = useTheme();
    return <div className={theme.detailsGroup.wrapper}>
        <div className="px-4 py-5 sm:px-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">

            </h3>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">

            </p>
        </div>
    </div>
}
