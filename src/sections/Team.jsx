import { Fragment } from 'react';
import SectionHeader from '../components/common/SectionHeader.jsx';
import Reveal from '../components/common/Reveal.jsx';
import { leadership, departments } from '../data/team.js';

function TreeNode({ level, role, description }) {
    return (
        <div className={`tree-node level-${level}`}>
            <div className="node-content">
                <h5>{role}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default function Team() {
    return (
        <section id="team" className="team-section">
            <div className="container">
                <SectionHeader label="Our Team" title="Organisation Structure" />
                <Reveal className="org-tree">
                    {leadership.map((member, index) => (
                        <Fragment key={member.role}>
                            <TreeNode level={index + 1} {...member} />
                            <div className="tree-line vertical"></div>
                        </Fragment>
                    ))}
                    <div className="tree-row">
                        {departments.map((member) => (
                            <TreeNode key={member.role} level={3} {...member} />
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
