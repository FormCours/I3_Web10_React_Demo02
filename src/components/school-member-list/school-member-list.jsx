const SchoolMemberListItem = (props) => {
    const {firstname, lastname, status} = props;

    return (
        <article>
            <p>
                {(status !== 'Prof') ? firstname : 'Professeur'} 
                {' '}
                {lastname}
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur, nostrum reiciendis dolore laudantium facere explicabo dolorem ullam aperiam nisi. Eum eveniet est doloremque incidunt veritatis consequatur dolore ullam animi consectetur.
            </p>
        </article>
    )
};

const SchoolMemberList = (props) => {

    const membersJSX = props.members.map(
        member => <SchoolMemberListItem key={member.id} {...member} />
    );

    // const membersJSX = props.members.map(
    //     member => <SchoolMemberListItem key={member.id} firstname={member.firstname}
    //                                                     lastname={member.lastname}
    //                                                     status={member.status} />
    // );

    return (<>
        <h3>Listes des members d'une ecole</h3>
        <section>
            {membersJSX}
        </section>
    </>);
};

SchoolMemberList.defaultProps = {
    members: []
};

export default SchoolMemberList;