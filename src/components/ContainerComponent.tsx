import { ReactNode } from 'react'

const ContainerComponent = ({ children }: { children: ReactNode }) => {
	return (
		<div className='w-full flex items-center justify-center'>
			<div className='w-[380px] max-w-full max-lg:px-8'>
				{children}
			</div>
		</div>
	)
}

export default ContainerComponent