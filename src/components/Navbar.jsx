import { appleImg } from '../utils'

const Navbar = () => {
  return (
    <header>
        <nav>
            <img src={appleImg} alt='Apple' width={18} height={18} />

            <div>
                {['Phones', 'Macbooks', 'Tablets'].map((nav, i) => (
                    <div key={i}>
                        {nav}
                    </div>
                ))}
            </div>
        </nav>
    </header>
  )
}

export default Navbar