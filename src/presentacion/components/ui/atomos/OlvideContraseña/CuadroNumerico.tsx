
interface CuadroNumericoProps{
    children?: React.ReactNode;
    classname?: string;
    width: number;
    height: number;
}

export function CuadroNumerico ({
    children,
    classname,
    width = 50,
    height = 50
}: CuadroNumericoProps): JSX.Element {
    return (
        <div className={classname} style={{ width, height }}>
            {children}
        </div>
    );
};
