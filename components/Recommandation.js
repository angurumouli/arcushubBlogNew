import { MdMarkEmailUnread } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

import Image from 'next/image'

import ReplitLogo from '../static/replit.png'
import TutorialImg from '../static/tutorial.jpg'
import CPLogo from '../static/cp.png'
import Qazi from '../static/qazi.jpg'
import JSLogo from '../static/jsLogo.png'



const styles = {
    wrapper: `h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem]`,
    accentedButton: 'flex items-center justify-center bg-black text-sm bg-black text-white my-[2rem] py-[.6rem] rounded-full',
    searchBar: `flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full`,
    searchInput: `border-none outline-none bg-none w-full`,
    authorContainer: `my-[2rem]`,
    authoreProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
    authorFollowing: `text-[#787878]`,
    actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
    authorActions: `flex gap-[.6rem] my-[.4rem]`,
    recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    recommendedAuthorName: `text-sm`,
    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationTitle: `font-bold`,
    recommendationThumbnailContainer: `flex flex-1 items-center h-[4rem] w-[4rem]`,
    recommendationThumbNail: `object-cover`,
    articleContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
    articleContent: `flex-[4]`,

}


const Recommandation = ({author}) => {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.accentedButton}>Get Unlimited Access </div>
                <div className={styles.searchBar}>
                    <AiOutlineSearch />
                    <input
                        type='text'
                        placeholder='Search'
                        className={styles.searchInput}
                    />
                </div>

                <div className={styles.authorContainer}>
                    <div className={styles.authoreProfileImageContainer}>
                        <Image
                            src={`https://res.cloudinary.com/demo/image/fetch/${author?.data?.imageUrl}`}
                            width={100}
                            height={100}
                        />
                    </div>
                    <div className={styles.authorName}>{author?.data?.name}</div>
                    <div className={styles.authorFollowing}>1M Followers</div>

                    <div className={styles.authorActions}>
                        <button className={styles.actionButton}>Follow</button>
                        <button className={styles.actionButton}><MdMarkEmailUnread /></button>
                    </div>
                </div>

                <div className={styles.recommendationContainer}>
                    <div className={styles.title}>More From Medium</div>
                    <div className={styles.articleContainer}>



                        {recommendedPosts.map(post => (
                            <div className={styles.articleContentWrapper}>
                                <div className={styles.articleContent}>
                                    <div>
                                        <div className={styles.recommendationAuthorContainer}>
                                            <div className={styles.recommendationAuthorProfileImageContainer}>
                                                <Image src={post.author.image} width={100} height={100} />
                                            </div>
                                            <div className={styles.recommendedAuthorName}>{post.author.name}</div>
                                        </div>
                                        <div className={styles.recommendationTitle}>{post.title}</div>
                                    </div>
                                </div>
                                <div className={styles.recommendationThumbnailContainer} >
                                    <Image
                                        className={styles.recommendationThumbNail}
                                        src={post.image} width={100} height={100} />
                                </div>
                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}

export default Recommandation

const recommendedPosts = [
    {
        title: 'what can you do with Replit..?',
        image: ReplitLogo,
        author: {
            name: 'Avinash',
            image: CPLogo
        }
    },

    {
        title: ' The Ultimate JavaScript Course Foe Beginners by Clever Programmer',
        image: TutorialImg,
        author: {
            name: 'Rafeh Qazi',
            image: Qazi
        }
    },

    {
        title: 'How to become a clever programmer in 2023',
        image: JSLogo,
        author: {
            name: 'Mouli Anguru',
            image: CPLogo
        }
    },
    {
        title: 'Lession on Love makes what!!',
        image: TutorialImg,
        author: {
            name: 'Mamidi Santosh',
            image: Qazi
        }
    },
    {
        title: 'Being Sad Is Waste Of Time, Find The Reason To Smile',
        image: TutorialImg,
        author: {
            name: 'G S K P',
            image: Qazi
        }
    },
    
]
