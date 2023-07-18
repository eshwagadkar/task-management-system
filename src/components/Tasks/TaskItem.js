import { useState } from 'react';

import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

import './TaskItem.styles.scss';

const TaskItem = props => {

    const [showDetail, setShowDetail] = useState(false);

    const openDetailHandler = () => setShowDetail(true);
    const closeDetailHandler = () => setShowDetail(false);

    const { title, description, dueDate, id } = props.task;
    return <>
        <Modal 
            show={showDetail}
            onCancel={closeDetailHandler}
            header={title}
            contentClass='task-item__modal-content'
            footerClass='task-item__modal-actions'
            footer={<Button onClick={closeDetailHandler}>CLOSE</Button>}
        >       
         <div className='task-item__detail-container'>{description}</div>               
        </Modal>

            <li className='task-item'>
                <Card className='task-item__content'>
                    {/* Task Item Info */}
                    <div className='task-item__info'>
                        <h2>{title}</h2>
                        <h3>{description}</h3>
                        <p>{dueDate}</p>
                    </div>

                    {/* Task Actions */}
                    <div className='task-item__actions'>
                        <Button onClick={openDetailHandler} inverse>View</Button>
                        <Button to={`/tasks/${id}`}>EDIT</Button>
                        <Button danger>Delete</Button>
                    </div>
                </Card>
            </li>
    </>
}

export default TaskItem;