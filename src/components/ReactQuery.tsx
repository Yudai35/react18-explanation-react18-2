import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { AlbumList } from "./AlbumList";
import { Sidebar } from "./Sidebar";
import { TodoList } from "./TodoList";


export const ReactQuery = () => {

    return (
         <div style={{ display: 'flex', padding: '16px' }}>
            <Sidebar />
            <div style={{ flexGrow: 1 }}>
                {/* 階層がより深いfallbackが優先されUIに適応される */}
                <ErrorBoundary fallback={<p>AlbumListエラーです！</p>}>
                    <Suspense fallback={<p>AlbumListローディング中です！</p>}>
                        <AlbumList />
                    </Suspense>
                </ErrorBoundary>
                <ErrorBoundary fallback={<p>TodoListエラーです！</p>}>
                    <Suspense fallback={<p>TodoListローディング中です！</p>}>
                        <TodoList />
                    </Suspense>
                </ErrorBoundary>

            </div>
        </div>
    )
}