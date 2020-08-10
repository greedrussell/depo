import React from 'react'
import Error from 'next/error'

interface IProps {
	statusCode: any
}

// для обработки ошибок 404 и 500
const CustomError: React.FC<IProps> = ({ statusCode }) => (
	<Error statusCode={statusCode} />
)

export default CustomError 