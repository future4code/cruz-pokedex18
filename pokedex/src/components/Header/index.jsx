import useGo from '../../hooks/useGo'

const Header = () => {
  const go = useGo()

  return (
    <header>
      <h1>Header boladao</h1>
      <button onClick={go.home}>HOME</button>
    </header>
  )
}
