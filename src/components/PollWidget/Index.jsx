import PollOptions from './View/PollOptions';
import PollWidget from './View/PollWidget';

function PollView() {
	const options = [
		{
			id: 123,
			optionTitle: 'Google',
			votes: 100,
		},
		{
			id: 124,
			optionTitle: 'Microsoft',
			votes: 200,
		},
		{
			id: 125,
			optionTitle: 'YouTube',
			votes: 50,
		},
		{
			id: 126,
			optionTitle: 'Meta',
			votes: 650,
		},
	];

	return (
		<PollWidget title="With your preparation strategy what companies are you aiming for? ">
			{options.map((option) => (
				<PollOptions
					key={option.id}
					id={option.id}
					votes={option.votes}
					title={option.optionTitle}
				/>
			))}
		</PollWidget>
	);
}

export default PollView;
