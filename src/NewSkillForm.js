import { useState } from 'react';

function NewSkillForm ({addSkill}) {

const [newSkill, setNewSkill] = useState(
    { name: '', level: 3 } 
)

const handleAddSkill = (event) => {
    event.preventDefault()
    addSkill(newSkill)
    setNewSkill({name:'', level: 3})

}

const handleChange = (event) => {
setNewSkill({...newSkill, [event.target.name]: event.target.value})
    
}

    return (
    <form className='NewSkillForm' onSubmit={handleAddSkill}>
        <label>Skill</label>
        <input value={newSkill.name} name='name' id='skill-input' className='input' onChange={handleChange}></input>
        <label>Level</label>
            <select value={newSkill.level} name='level' onChange={handleChange} className='select'>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            </select>
        <button type='submit'>ADD SKILL</button>
    </form>
    )
}

export default NewSkillForm