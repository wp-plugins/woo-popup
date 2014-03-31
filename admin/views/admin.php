<?php
/**
 * Represents the view for the administration dashboard.
 *
 * This includes the header, options, and other information that should provide
 * The User Interface to the end user.
 *
 * @package   WooPopup
 * @author    Guillaume Kanoufi <guillaume@lostwebdesigns.com>
 * @license   GPL-2.0+
 * @link      http://example.com
 * @copyright 2014 woocommerce, popup, woopopup
 */
?>

<div class="wrap">

	<h2><?php echo esc_html( get_admin_page_title() ); ?></h2>

	<div class="wrap metabox-holder columns-2">
	      <form method="post" name="options" action="options.php">
			<?php
				$options = get_option($this->options_slug);
				/*
				* Grab all value if already set
				*
				*/
				$content = $options['popup_content'];
				$page = $options['popup_page'];
				$class = $options['popup_class'];
				$start_date = $options['start_date'];
				$end_date = $options['end_date'];

				/*
				* Set up hidden fields
				*
				*/
				settings_fields($this->options_slug);
			?>

			<?php wp_editor( $content, $this->options_slug.'[popup_content]'); ?>
	            <table width="100%" cellpadding="10" class="form-table">
	            	<tr>
	            		<th scope="row">
	            			<label><?php _e('Choose the page you want to display your popup window (default is cart page)', $this->plugin_slug);?>:</label>
	            		</th>
	            		<td>
	            			<?php
	            				$args = array(
	            					'selected' => $page,
	            					'name' => $this->options_slug.'[popup_page]',
	            				);
	            				$pages = wp_dropdown_pages($args);
	            			?>
	            		</td>

	            	</tr>
	            	<tr>
	            		<th scope="row">
	            			<label><?php _e('If using woocommerce, you can choose from woocommerce-message classes (message, info or error) else it will add a custom class of woopopup-yourchoice (your choice being: message, info or error) so you will be able to style it in your css', $this->plugin_slug);?>:</label>
	            		</th>
	            		<td>
	            			<select name="<?php echo $this->options_slug;?>[popup_class]" >
	            				<option value="">Choose a class</option>
							<option value="message" <?php if($class == 'message') echo 'selected';?>>Message</option>
							<option value="info" <?php if($class == 'info') echo 'selected';?>>Info</option>
							<option value="error" <?php if($class == 'error') echo 'selected';?>>Error</option>
	            			</select>
	            		</td>

	            	</tr>
	                <tr>
	                    <th scope="row">
		                    <label><?php _e('Begining Date', $this->plugin_slug);?>:</label>
		                </th>
		                <td>
		                    <input type="text" class="wpopup_date" name="<?php echo $this->options_slug;?>[start_date]" value="<?php echo $start_date;?>"/>
	                    </td>
	                 </tr>
	                 <tr>
	                    <th scope="row">
		                    <label><?php _e('End Date', $this->plugin_slug);?>:</label>
		               </th>
		               <td>
		                    <input type="text" class="wpopup_date" name="<?php echo $this->options_slug;?>[end_date]" value="<?php echo $end_date;?>"/>
	                    </td>
	                </tr>
	            </table>

	            <p class="submit">
	                <input type="submit" class="button-primary" name="Submit" value="Save Changes" />
	            </p>
            </form>

      </div>
</div>
