import { NavLink, Link, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../Button/Button';
import cn from 'classnames';

export function Layout() {
	return <>

		{/* <div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src="/user.png" alt="" />
					<div className={styles['name']}>Никита Наумов</div>
					<div className={styles['mail']}>naumovn808@gmail.com</div>
				</div>
				<div className={styles['menu']}>
					<Link to='/' className={styles['link']}>
						<img src="/menu-icon.svg" alt="иконка меню" />
						Меню</Link>
					<Link to='/cart' className={styles['link']}>
						<img src="/cart-icon.svg" alt="иконка корзины" />
						Корзина</Link>
				</div>
				<Button className={styles['exit']}>
					<img src="/exit.svg" alt="Иконка выхода" />
					Выход
				</Button>
			</div>
			<div>
				<Outlet />
			</div>
		</div> */}

		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<img className={styles['avatar']} src="/user.png" alt="" />
					<div className={styles['name']}>Никита Наумов</div>
					<div className={styles['mail']}>naumovn808@gmail.com</div>
				</div>
				<div className={styles['menu']}>
					<NavLink to='/' className={({ isActive }) => cn(styles['link'], {
						[styles['active']]: isActive
					})}>
						<img src="/menu-icon.svg" alt="иконка меню" />
						Меню</NavLink>
					<NavLink to='/cart' className={({ isActive }) => cn(styles['link'], {
						[styles['active']]: isActive
					})}>
						<img src="/cart-icon.svg" alt="иконка корзины" />
						Корзина</NavLink>
				</div>
				<Button className={styles['exit']}>
					<img src="/exit.svg" alt="Иконка выхода" />
					Выход
				</Button>
			</div>
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div >

	</>;
}