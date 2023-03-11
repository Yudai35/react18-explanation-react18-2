import { Suspense, useState, useTransition } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";

type Tabs = 'todo' | 'album';

export const ReactQuery = () => {
    const [selectedTab, setSelectedTab] = useState<Tabs>('todo');
    const [isPending, startTransition] = useTransition();

    const onClickTabButton = (tab: Tabs) => {
        // Suspense と useTransition を掛け合わせることで、〜表示OKになるまでコンポーネントを表示させないようにできる（ユーザー体験向上）
        startTransition(() => {
            setSelectedTab(tab);
        })
    }

    const buttonStyle = {
        padding: '12px',
        fontSize: '16px',
        border: 'none',
        marginBottom: '8px',
        opacity: isPending ? 0.5 : 1,
    }

    const albumButtonStyle  = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'album' ? 'royalblue' : 'white',
        color: selectedTab === 'album' ? 'white' : 'black'
    }

    const todoButtonStyle  = {
        ...buttonStyle,
        backgroundColor: selectedTab === 'todo' ? 'royalblue' : 'white',
        color: selectedTab === 'todo' ? 'white' : 'black'
    }

    return (
         <div style={{ display: 'flex', padding: '16px' }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                <button style={todoButtonStyle} onClick={() => onClickTabButton('todo')}>Todo</button>
                <button style={albumButtonStyle} onClick={() => onClickTabButton('album')}>Album</button>
                {/* 階層がより深いfallbackが優先されUIに適応される */}
                <ErrorBoundary fallback={ selectedTab === 'todo' ? <p>TodoListエラーです！</p> : <p>AlbumListエラーです！</p> }>
                    <Suspense fallback={ selectedTab === 'todo' ? <p>TodoListローディング中です！</p> : <p>AlbumListローディング中です！</p> }>
                        {selectedTab === 'todo' ? <TodoList /> : <AlbumList />}
                    </Suspense>
                </ErrorBoundary>
            </div>
        </div>
    )
}