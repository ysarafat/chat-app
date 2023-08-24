import gravatarUrl from 'gravatar-url';
import moment from 'moment/moment';
import { useSelector } from 'react-redux';
import { useGetConversationsQuery } from '../../features/conversations/conversationsApi';
import getPartnerInfo from '../../utils/getPartnerInfo';
import Error from '../ui/Error';
import ChatItem from './ChatItem';

export default function ChatItems() {
    const { user } = useSelector((state) => state.auth) || {};
    const { email } = user || {};
    const { data: conversations, isLoading, isError, error } = useGetConversationsQuery(email);

    let content = null;
    if (isLoading) {
        content = <li className="m-2 text-center">Loading...</li>;
    }
    if (!isLoading && isError) {
        content = (
            <li className="m-2 text-center">
                <Error message={error?.data} />
            </li>
        );
    }
    if (!isError && !isLoading && conversations?.length === 0) {
        content = <li className="m-2 text-center">No Conversations found</li>;
    }
    if (!isError && !isLoading && conversations?.length > 0) {
        content = conversations.map((conversation) => {
            const { id, message, timestamp } = conversation;
            const { name, email: partnerEmail } = getPartnerInfo(conversation.users, email);
            return (
                <li key={id}>
                    <ChatItem
                        avatar={gravatarUrl(partnerEmail, { size: 80 })}
                        name={name}
                        lastMessage={message}
                        lastTime={moment(timestamp).fromNow()}
                        id={id}
                    />
                </li>
            );
        });
    }
    return <ul>{content}</ul>;
}
