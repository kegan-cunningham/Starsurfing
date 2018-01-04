require 'test_helper'

class StarsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get stars_index_url
    assert_response :success
  end

  test "should get show" do
    get stars_show_url
    assert_response :success
  end

end
