function SkillListItem({name, level}) {

    return(
    <li className='SkillListItem'>{name}<p className='level'>LEVEL {level}</p></li>    
    )
}

export default SkillListItem