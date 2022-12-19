const [open, setOpen] = useState(false);
const openRef = useRef();
const headerScroll = useRef();

const openMenu = () => {
	setOpen(true);
	document.body.classList.add('no-scroll');
};

const closeMenu = () => {
	setOpen(false);
	document.body.classList.remove('no-scroll');
};

useEffect(() => {
	const handleClickOutside = (event) => {
		if (event.target === openRef.current) {
			setOpen(false);
			document.body.classList.remove('no-scroll');
		}
	};
	document.body.addEventListener('click', handleClickOutside);

	return () => {
		document.body.removeEventListener('click', handleClickOutside);
	};
}, []);
