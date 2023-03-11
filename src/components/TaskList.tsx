import { useDeferredValue } from "react"
import type { Task } from "./Transition"

type Props = {
    taskList: Task[]
}

export const TaskList = ({ taskList }: Props) => {
    // コンポーネント先で緊急性の高くないset関数の値をuseDeferredValueの引数にもたせ格納した変数を使用することで、transitionの機能を実装することができる。
    const deferredTaskList = useDeferredValue(taskList);
    return (
        <>
            {deferredTaskList.map((task) => (
                <div key={task.id} style={{ width: '300px' , margin: 'auto', backgroundColor: 'lavender'}}>
                    <p>タイトル：{task.title}</p>
                    <p>担当：{task.assignee}</p>
                </div>
            ))}
        </>
    )
}