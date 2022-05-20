const Filter = ({searchName, handleSearchName}) => {
  return (
	<div>
      find countries 
      <input 
        value={searchName}
        onChange={handleSearchName}
      />
    </div>
  )
}

export default Filter