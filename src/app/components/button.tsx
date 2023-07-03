import className from 'classnames';

// <Button primary=true></Button === <Button primary></Button>

// @ts-ignore
export default function Button({children, primary, secondary, success, warning, danger, outline, rounded, ...rest}) {
    const classes = className(
        rest.className,
        'flex items-center px-3 py-1.5 border',
        {
            'border-blue-600 bg-blue-500': primary,
            'border-gray-900 bg-gray-900': secondary,
            'border-green-600 bg-green-500': success,
            'border-yellow-600 bg-yellow-500': warning,
            'border-red-600 bg-red-500': danger,
            'rounded-full': rounded,
            'bg-white': outline,
            'text-white': !outline,
            'text-blue-500': outline && primary,
            'text-gray-500': outline && secondary,
            'text-green-500': outline && success,
            'text-yellow-500': outline && warning,
            'text-red-500': outline && danger
        }
    );

    return (
        <button {...rest} className={classes}>{children}</button>
    );
}