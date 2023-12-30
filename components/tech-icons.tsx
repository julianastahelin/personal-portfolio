import * as TechIcons from './icons'


export type TechName = keyof typeof TechIcons

interface TechIconProps extends React.SVGProps<SVGSVGElement> {
    name: TechName
}

export function TechIcon({ name, ...props }: TechIconProps) {
    if (Object.keys(TechIcons).includes(name)) {
        const Icon = TechIcons[name]
        return <Icon {...props} />
    } else {
        return null
    }
}
