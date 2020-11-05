function MyComp() {
	const [state, setState] = useState()
	useEffect(() => {
		console.log(state)
	}, [state] as const)
	return 'Hello, world'
}
