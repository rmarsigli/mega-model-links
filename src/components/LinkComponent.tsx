import IconComponent from './IconComponent'

export type LinkProps = {
	href: string
	icon?: string
	label: string
}

const LinkComponent = (props: LinkProps) => {
	return (
		<a
			href={props.href}
			className='block w-full relative p-4 px-8 text-center border-2 rounded-full border-slate-900 dark:border-white gap-2 lg:gap-4 hover:bg-slate-100 dark:hover:bg-slate-800'
		>
			{props.icon && (
				<div className='absolute left-4 top-3'>
					<IconComponent icon={props.icon} />
				</div>
			)}
			<span className='w-full lg:text-lg'>{props.label}</span>
		</a>
	)
}

export default LinkComponent