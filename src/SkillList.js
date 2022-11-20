import SkillListItem from './SkillListItem';


function SkillList({skills}) {
    return (
<ul className='padding-0'>
 {skills.map(skill => <SkillListItem key={skill.name} name={skill.name} level={skill.level} />)}
</ul>

    )
}

export default SkillList